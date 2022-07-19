from django.db import models
import bcrypt
import re


class UserManager(models.Manager):
    def registration_validator(self, postData):
        errors = {}
        if len(postData["first_name"]) < 2:
            errors["first_name"] = "First Name should be at least 2 characters"
        if len(postData['last_name']) < 2:
            errors["last_name"] = "Last Name should be at least 2 characters"

        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if not EMAIL_REGEX.match(postData['email']):
            errors['email'] = "Invalid email address!"
        elif not EMAIL_REGEX.match(postData['email']):
            errors['email'] = "Must be a valid email address"

        logged_user = User.objects.filter(email=postData["email"])
        if len(logged_user) > 0:
            errors['duplicate'] = "Email is already registered"

        if len(postData['user_name']) < 2:
            errors["user_name"] = "Last Name should be at least 2 characters"

        logged_user = User.objects.filter(user_name=postData["user_name"])
        if len(logged_user) > 0:
            errors['duplicate'] = "User Name is already registered"

        if len(postData['password']) < 5:
            errors["password"] = "Passwords should be at least 5 charicters"

        if postData['password'] != postData ['password_confirm']:
            errors["password_confirm"] = "Passwords must match"

        return errors

    def login_validator(self, postData):
        errors = {}
        logged_user = User.objects.filter(email=postData['email'])
        if len(logged_user) !=1:
            errors['email'] = 'Email is not registered'
        if len(postData['email']) == 0:
            errors['email'] = 'Please enter an email address'

        logged_user = User.objects.filter(user_name=postData['user_name'])
        if len(logged_user) !=1:
            errors['user_name'] = 'User Name is not registered'
        if len(postData['user_name']) == 0:
            errors['user_name'] = 'Please enter a User Name'

        if len(postData['password']) < 5:
            errors["password"] = "Passwords should be at least 5 charicters"
        elif bcrypt.checkpw(postData['password'].encode(), logged_user[0].password.encode())!= True:
            errors['password_check'] = 'Invalid email or password'
        return errors


class User(models.Model):
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    email = models.TextField(max_length = 50)
    user_name = models.TextField(max_length = 50)
    password = models.TextField(max_length=60)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()

class EventManager(models.Manager):
    def event_validator(self, postData):
        errors = {}
        if len(postData["event_name"]) < 3:
            errors["event_name"] = "Event name should be at least 3 characters"

        if len(postData["location"]) < 3:
            errors["location"] = "Location should be at least 3 characters"

        if len(postData["price"]) == 0:
            errors["price"] = "Price must be entered"

        if len(postData["start_time"]) == 0:
            errors["start_time"] = "Start time must be entered"

        if len(postData["end_time"]) == 0:
            errors["end_time"] = "end time must be entered"

        if len(postData["start_date"]) == 0:
            errors["start_date"] = "Start date must be entered"

        if len(postData['end_date']) == 0:
            errors["end_date"] = "Start date must be entered"

        if len(postData["description"]) < 3:
            errors["description"] = "Description should be at least 3 characters"

        return errors

class Event(models.Model):
    event_name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=6, decimal_places=2)

    event_url = models.TextField()

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    start_date = models.DateTimeField()
    end_date = models.DateTimeField()

    start_time = models.DateTimeField()
    end_time = models.DateTimeField()

    description = models.TextField(max_length=500)

    private = models.BooleanField(default=False)

    created_by = models.ForeignKey(User, related_name='event_planned', on_delete=models.CASCADE)

    join_event = models.BooleanField(default=False)
    objects = EventManager()
