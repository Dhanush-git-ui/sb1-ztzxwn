import React from 'react';
import { Calendar, User } from 'lucide-react';

const appointments = [
  {
    doctor: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    date: 'March 15, 2024',
    time: '10:30 AM',
  },
  {
    doctor: 'Dr. Michael Chen',
    specialty: 'General Practitioner',
    date: 'March 20, 2024',
    time: '2:15 PM',
  },
];

export function UpcomingAppointments() {
  return (
    <div className="space-y-4">
      {appointments.map((apt) => (
        <div
          key={apt.doctor}
          className="flex items-start p-4 bg-gray-50 rounded-lg"
        >
          <User className="w-6 h-6 text-teal-500 mt-1" />
          <div className="ml-4 flex-1">
            <div className="flex justify-between">
              <div>
                <p className="font-medium">{apt.doctor}</p>
                <p className="text-sm text-gray-600">{apt.specialty}</p>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{apt.date} - {apt.time}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}