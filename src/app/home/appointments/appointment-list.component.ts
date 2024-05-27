import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '@app/_services';
import { Appointment } from '@app/_models';

@Component({
    selector: 'app-appointment-list',
    templateUrl: './appointment-list.component.html'
})
export class AppointmentListComponent implements OnInit {
    appointments: Appointment[] = [];

    constructor(private appointmentService: AppointmentService) { }

    ngOnInit() {
        this.appointmentService.getAll().subscribe(appointments => this.appointments = appointments);
    }

    editAppointment(id: string) {
        // Add your edit logic here
    }

    deleteAppointment(id: string) {
        this.appointmentService.delete(id).subscribe(() => {
            this.appointments = this.appointments.filter(x => x.id !== id);
        });
    }

    addAppointment() {
        // Add your add logic here
    }
}
