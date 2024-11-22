import React from 'react';
import { Pill } from 'lucide-react';

interface Medication {
  name: string;
  dosage: string;
  frequency: string;
  nextDose: string;
}

interface MedicationListProps {
  medications: Medication[];
}

export function MedicationList({ medications = [] }: MedicationListProps) {
  if (medications.length === 0) {
    return (
      <div className="text-center text-gray-500 py-4">
        No medications currently prescribed
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {medications.map((med) => (
        <div
          key={med.name}
          className="flex items-center p-4 bg-gray-50 rounded-lg"
        >
          <Pill className="w-6 h-6 text-purple-500" />
          <div className="ml-4 flex-1">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium">{med.name}</p>
                <p className="text-sm text-gray-600">{med.dosage} - {med.frequency}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">Next dose</p>
                <p className="text-sm text-gray-600">{med.nextDose}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}