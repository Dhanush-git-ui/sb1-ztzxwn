import React from 'react';
import { Activity, Heart, Weight } from 'lucide-react';

interface HealthMetricsProps {
  data?: {
    conditions: string[];
    medications: Array<{
      name: string;
      dosage: string;
      frequency: string;
    }>;
    allergies: string[];
  };
}

export function HealthMetrics({ data }: HealthMetricsProps) {
  if (!data) {
    return (
      <div className="text-center text-gray-500 py-4">
        No health data available
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center mb-3">
          <Heart className="w-6 h-6 text-rose-500 mr-2" />
          <h3 className="font-medium">Conditions</h3>
        </div>
        <ul className="space-y-1">
          {data.conditions?.length > 0 ? (
            data.conditions.map((condition, index) => (
              <li key={index} className="text-sm text-gray-600">• {condition}</li>
            ))
          ) : (
            <li className="text-sm text-gray-500">No conditions listed</li>
          )}
        </ul>
      </div>

      <div className="p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center mb-3">
          <Activity className="w-6 h-6 text-blue-500 mr-2" />
          <h3 className="font-medium">Medications</h3>
        </div>
        <ul className="space-y-1">
          {data.medications?.length > 0 ? (
            data.medications.map((med, index) => (
              <li key={index} className="text-sm text-gray-600">
                • {med.name} ({med.dosage}) - {med.frequency}
              </li>
            ))
          ) : (
            <li className="text-sm text-gray-500">No medications listed</li>
          )}
        </ul>
      </div>

      <div className="p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center mb-3">
          <Weight className="w-6 h-6 text-emerald-500 mr-2" />
          <h3 className="font-medium">Allergies</h3>
        </div>
        <ul className="space-y-1">
          {data.allergies?.length > 0 ? (
            data.allergies.map((allergy, index) => (
              <li key={index} className="text-sm text-gray-600">• {allergy}</li>
            ))
          ) : (
            <li className="text-sm text-gray-500">No allergies listed</li>
          )}
        </ul>
      </div>
    </div>
  );
}