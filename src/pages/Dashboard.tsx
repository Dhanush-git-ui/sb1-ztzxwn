import React from 'react';
import { Header } from '../components/Header';
import { DashboardCard } from '../components/DashboardCard';
import { HealthMetrics } from '../components/HealthMetrics';
import { MedicationList } from '../components/MedicationList';
import { UpcomingAppointments } from '../components/UpcomingAppointments';
import { InitialAssessment } from '../components/InitialAssessment';
import { DietMenu } from '../components/DietMenu';

export function Dashboard() {
  const [showAssessment, setShowAssessment] = React.useState(true);
  const [healthData, setHealthData] = React.useState({
    conditions: [],
    medications: [],
    allergies: [],
    lifestyle: {
      dietPreference: 'regular'
    }
  });

  const handleAssessmentComplete = (data: any) => {
    setHealthData({
      conditions: data.medicalHistory.conditions,
      medications: data.medicalHistory.medications,
      allergies: data.medicalHistory.allergies,
      lifestyle: data.lifestyle
    });
    setShowAssessment(false);
  };

  if (showAssessment) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <InitialAssessment onComplete={handleAssessmentComplete} />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Health Dashboard</h2>

        <div className="grid grid-cols-1 gap-8">
          <DashboardCard title="Health Metrics">
            <HealthMetrics data={healthData} />
          </DashboardCard>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DashboardCard title="Medications">
              <MedicationList medications={healthData.medications} />
            </DashboardCard>

            <DashboardCard title="Upcoming Appointments">
              <UpcomingAppointments />
            </DashboardCard>
          </div>

          <DashboardCard title="Personalized Diet Plan">
            <DietMenu dietType={healthData.lifestyle.dietPreference} />
          </DashboardCard>
        </div>
      </main>
    </div>
  );
}