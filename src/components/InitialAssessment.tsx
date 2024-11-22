import React, { useState } from 'react';
import { ClipboardCheck } from 'lucide-react';

interface InitialAssessmentProps {
  onComplete: (data: any) => void;
}

export function InitialAssessment({ onComplete }: InitialAssessmentProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: {
      name: '',
      age: '',
      gender: '',
    },
    medicalHistory: {
      conditions: [],
      allergies: [],
      medications: [
        { name: '', dosage: '', frequency: '' }
      ],
    },
    lifestyle: {
      activityLevel: '',
      dietPreference: '',
      sleepHours: '',
      stressLevel: '',
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      onComplete(formData);
    }
  };

  const updateFormData = (section: string, data: any) => {
    setFormData((prev) => ({
      ...prev,
      [section]: { ...prev[section], ...data },
    }));
  };

  const addMedication = () => {
    setFormData((prev) => ({
      ...prev,
      medicalHistory: {
        ...prev.medicalHistory,
        medications: [...prev.medicalHistory.medications, { name: '', dosage: '', frequency: '' }]
      }
    }));
  };

  const updateMedication = (index: number, field: string, value: string) => {
    setFormData((prev) => {
      const newMedications = [...prev.medicalHistory.medications];
      newMedications[index] = { ...newMedications[index], [field]: value };
      return {
        ...prev,
        medicalHistory: {
          ...prev.medicalHistory,
          medications: newMedications
        }
      };
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center mb-6">
        <ClipboardCheck className="w-8 h-8 text-blue-600 mr-3" />
        <h2 className="text-2xl font-semibold">Health Assessment</h2>
      </div>

      <div className="mb-8">
        <div className="flex justify-between items-center">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`flex items-center ${i < step ? 'text-blue-600' : ''}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  i <= step ? 'bg-blue-600 text-white' : 'bg-gray-200'
                }`}
              >
                {i}
              </div>
              {i < 3 && <div className={`w-full h-1 ${i < step ? 'bg-blue-600' : 'bg-gray-200'}`} />}
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {step === 1 && (
          <>
            <h3 className="text-lg font-medium mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300"
                  value={formData.personalInfo.name}
                  onChange={(e) => updateFormData('personalInfo', { name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Age</label>
                <input
                  type="number"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300"
                  value={formData.personalInfo.age}
                  onChange={(e) => updateFormData('personalInfo', { age: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Gender</label>
                <select
                  required
                  className="mt-1 block w-full rounded-md border-gray-300"
                  value={formData.personalInfo.gender}
                  onChange={(e) => updateFormData('personalInfo', { gender: e.target.value })}
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h3 className="text-lg font-medium mb-4">Medical History & Medications</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Do you have any chronic conditions?
                </label>
                <textarea
                  className="mt-1 block w-full rounded-md border-gray-300"
                  rows={3}
                  placeholder="E.g., Diabetes, Hypertension, etc."
                  value={formData.medicalHistory.conditions.join(', ')}
                  onChange={(e) => updateFormData('medicalHistory', { 
                    conditions: e.target.value.split(',').map(item => item.trim()) 
                  })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  List any allergies
                </label>
                <textarea
                  className="mt-1 block w-full rounded-md border-gray-300"
                  rows={2}
                  placeholder="E.g., Peanuts, Penicillin, etc."
                  value={formData.medicalHistory.allergies.join(', ')}
                  onChange={(e) => updateFormData('medicalHistory', { 
                    allergies: e.target.value.split(',').map(item => item.trim()) 
                  })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Medications
                </label>
                {formData.medicalHistory.medications.map((med, index) => (
                  <div key={index} className="grid grid-cols-3 gap-4 mb-4">
                    <input
                      type="text"
                      placeholder="Medication name"
                      className="rounded-md border-gray-300"
                      value={med.name}
                      onChange={(e) => updateMedication(index, 'name', e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Dosage"
                      className="rounded-md border-gray-300"
                      value={med.dosage}
                      onChange={(e) => updateMedication(index, 'dosage', e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Frequency"
                      className="rounded-md border-gray-300"
                      value={med.frequency}
                      onChange={(e) => updateMedication(index, 'frequency', e.target.value)}
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addMedication}
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  + Add another medication
                </button>
              </div>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h3 className="text-lg font-medium mb-4">Lifestyle Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Activity Level</label>
                <select
                  required
                  className="mt-1 block w-full rounded-md border-gray-300"
                  value={formData.lifestyle.activityLevel}
                  onChange={(e) => updateFormData('lifestyle', { activityLevel: e.target.value })}
                >
                  <option value="">Select activity level</option>
                  <option value="sedentary">Sedentary</option>
                  <option value="light">Lightly Active</option>
                  <option value="moderate">Moderately Active</option>
                  <option value="very">Very Active</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Diet Preference</label>
                <select
                  required
                  className="mt-1 block w-full rounded-md border-gray-300"
                  value={formData.lifestyle.dietPreference}
                  onChange={(e) => updateFormData('lifestyle', { dietPreference: e.target.value })}
                >
                  <option value="">Select diet preference</option>
                  <option value="regular">Regular</option>
                  <option value="vegetarian">Vegetarian</option>
                  <option value="vegan">Vegan</option>
                  <option value="keto">Keto</option>
                  <option value="mediterranean">Mediterranean</option>
                </select>
              </div>
            </div>
          </>
        )}

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            {step === 3 ? 'Complete Assessment' : 'Next'}
          </button>
        </div>
      </form>
    </div>
  );
}