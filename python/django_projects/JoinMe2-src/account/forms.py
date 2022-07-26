from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import authenticate

from account.models import Account

class RegistrationForm(UserCreationForm):

    email = forms.EmailField(max_length=255, help_text="Required, Add a valid emial address")

    class Meta:
        model = Account
        fields = ('first_name', 'last_name', 'email', 'username', 'password1', 'password2')

        def clean_email(self):
            email = self.cleaned_data['email'].lower()
            try:
                account = Account.objects.get(email=email)
            except Exception as e:
                raise
            raise forms.ValidationError(f"email {email} is already registered")
        
        
        def clean_username(self):
            username = self.cleaned_data['username']
            try:
                account = Account.objects.get(username=username)
            except Exception as e:
                raise
            raise forms.ValidationError(f"username {username} is already registered")


class AccountAuthenticationForm(forms.ModelForm):
    password = forms.CharField(label='Password', widget=forms.PasswordInput)

    class Meta:
        model = Account
        fields = ('email', 'password')

    def clean(self):
        if self.is_valid():
            email = self.cleaned_data['email']
            password = self.cleaned_data['password']
            if not authenticate(email=email, password=password):
                raise forms.ValidationError('Invalid Login')