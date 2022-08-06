from django.conf import settings
from django.db import models


# Create your models here.


class Venue(models.Model):
    location = models.CharField(max_length=55)
    address = models.CharField(max_length=100, blank=True)
    state = models.CharField(max_length=55)
    city = models.CharField(max_length=55)
    zip_code = models.CharField(max_length=15)
    web_address = models.URLField('web address', blank=True)
    event_notes = models.TextField(max_length=500)
    private_venue = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Event(models.Model):
    event_name = models.CharField(max_length=55)

    price = models.DecimalField(max_digits=6, decimal_places=2)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    start_date = models.DateTimeField()
    end_date = models.DateTimeField()

    start_time = models.TimeField()
    end_time = models.TimeField()

    description = models.TextField(max_length=500)
    
    event_notes = models.TextField(max_length=500)

    private_event = models.BooleanField(default=False)

    # created_by = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='event_planned', on_delete=models.CASCADE)

    venue = models.ForeignKey(Venue, blank=True, on_delete=models.CASCADE, null=True) #call events.venue or events.venue.name for name

        
    host = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='host')
    guests = models.ManyToManyField(settings.AUTH_USER_MODEL, blank=True, related_name='guests')


    def __str__(self):
        return self.event_name

    # def add_guest(self, account):
    #     if not account in self.guests.all():
    #         self.guests.add(account)

    # def remove_guest(self, account):
    #     if account in self.guests.all():
    #         self.guests.remove(account)

    # def uninvite(self, removee):
    #     remover_guests_list = self

    #     remover_guests_list.remove_friend(removee)

    #     guests_list = Event.objects.get(host=removee)
    #     guests_list.remove_guest(self.host)


class EventInvite(models.Model):
    inviter = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="inviter")
    invitee = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="invitee")
    is_active = models.BooleanField(blank=True, null=False, default=True)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.inviter.username

    # def accept(self):
    #     invitee_event_list = Event.objects.get(user=self.inviter)
    #     if invitee_event_list:
    #         invitee_event_list.add_guest(self.inviter)
    #         inviter_event_list = Event.objects.get(user=self.inviter)
    #         if inviter_event_list:
    #             inviter_event_list.add_guest(self.inviter)
    #             self.is_active = False
    #             self.save()
    
    # def decline(self):
    #     self.is_active = False
    #     self.save()

    # def cancel(self):
    #     self.is_active = False
    #     self.save()
