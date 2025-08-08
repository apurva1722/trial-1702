import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contactus',
  imports: [NgFor],
  templateUrl: './contactus.html',
  styleUrl: './contactus.css'
})
export class Contactus {

  contactList = [
    { officeName: 'Powai', contactNo: '123-456-7890', email: 'headoffice@example.com' },
    { officeName: 'Pune', contactNo: '234-567-8901', email: 'sales@example.com' },
    { officeName: 'Powai', contactNo: '345-678-9012', email: 'support@example.com' },
    { officeName: 'NewJersey', contactNo: '456-789-0123', email: 'hr@example.com' },
    { officeName: 'Paris', contactNo: '567-890-1234', email: 'finance@example.com' },
    { officeName: 'cyberhub', contactNo: '678-901-2345', email: 'marketing@example.com' },
    { officeName: 'Pune', contactNo: '789-012-3456', email: 'it@example.com' },
    { officeName: 'Paris', contactNo: '890-123-4567', email: 'legal@example.com' },
    { officeName: 'newjersey', contactNo: '901-234-5678', email: 'operations@example.com' },
    { officeName: 'powai', contactNo: '012-345-6789', email: 'admin@example.com' }
  ];
}
