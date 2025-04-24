
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <Button onClick={handleLogout} variant="outline">
            Logout
          </Button>
        </div>
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Welcome, Admin!</h2>
          <p className="text-gray-600">
            You have successfully logged in to the dashboard. This is your secure area.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
