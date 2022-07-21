from django.db import models
import bcrypt
import re




# class UserManager(models.Manager):
#     def registration_validator(self, postData):
#         errors = {}
#         if len(postData["first_name"]) < 2:
#             errors["first_name"] = "First Name should be at least 2 characters"
#         if len(postData['last_name']) < 2:
#             errors["last_name"] = "Last Name should be at least 2 characters"

#         EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
#         if not EMAIL_REGEX.match(postData['email']):
#             errors['email'] = "Invalid email address!"
#         elif not EMAIL_REGEX.match(postData['email']):
#             errors['email'] = "Must be a valid email address"

#         logged_user = User.objects.filter(email=postData["email"])
#         if len(logged_user) > 0:
#             errors['duplicate'] = "Email is already registered"

#         if len(postData['user_name']) < 2:
#             errors['user_name'] = "User Name should be at least 2 characters"

#         # logged_user = User.objects.filter(user_name=postData["user_name"])
#         # if len(logged_user) > 0:
#         #     errors['duplicate'] = "User Name is already registered"

#         if len(postData['password']) < 5:
#             errors["password"] = "Passwords should be at least 5 charicters"

#         if postData['password'] != postData ['password_confirm']:
#             errors["password_confirm"] = "Passwords must match"

#         return errors

#     def login_validator(self, postData):
#         errors = {}
#         logged_user = User.objects.filter(email=postData['email'])
#         if len(logged_user) !=1:
#             errors['email'] = 'Email is not registered'
#         if len(postData['email']) == 0:
#             errors['email'] = 'Please enter an email address'

#         # logged_user = User.objects.filter(user_name=postData['user_name'])
#         # if len(logged_user) !=1:
#         #     errors['user_name'] = 'User Name is not registered'
#         # if len(postData['user_name']) == 0:
#         #     errors['user_name'] = 'Please enter a User Name'

#         if len(postData['password']) < 5:
#             errors["password"] = "Passwords should be at least 5 charicters"
#         elif bcrypt.checkpw(postData['password'].encode(), logged_user[0].password.encode())!= True:
#             errors['password_check'] = 'Invalid email or password'
#         return errors


# class User(models.Model):
#     first_name = models.CharField(max_length=45)
#     last_name = models.CharField(max_length=45)
#     email = models.TextField(max_length = 50)
#     user_name = models.CharField(max_length = 50)
#     password = models.TextField(max_length=60)
#     created_at = models.DateTimeField(auto_now_add=True)
#     updated_at = models.DateTimeField(auto_now=True)
#     objects = UserManager()