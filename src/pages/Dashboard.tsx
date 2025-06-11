import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, User, Key, History } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      title: 'STT Requests',
      value: '1,234',
      description: 'Speech-to-Text conversions this month',
      icon: Bot,
    },
    {
      title: 'TTS Requests',
      value: '987',
      description: 'Text-to-Speech conversions this month',
      icon: Bot,
    },
    {
      title: 'Voice Auth',
      value: '456',
      description: 'Authentication attempts this month',
      icon: User,
    },
    {
      title: 'API Calls',
      value: '3,456',
      description: 'Total API requests this month',
      icon: Key,
    },
  ];

  const recentActivity = [
    { action: 'STT conversion completed', time: '2 minutes ago', status: 'success' },
    { action: 'API key generated', time: '1 hour ago', status: 'success' },
    { action: 'Voice authentication failed', time: '3 hours ago', status: 'error' },
    { action: 'TTS synthesis completed', time: '5 hours ago', status: 'success' },
    { action: 'Account topped up $50', time: '1 day ago', status: 'success' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's an overview of your voice AI usage.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Account Overview</CardTitle>
            <CardDescription>Your account information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm font-medium">Account Type:</span>
              <span className="text-sm">Professional</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-medium">Balance:</span>
              <span className="text-sm">$127.50</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-medium">Member Since:</span>
              <span className="text-sm">January 2024</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-medium">API Quota:</span>
              <span className="text-sm">8,500 / 10,000</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <History className="h-4 w-4" />
              Recent Activity
            </CardTitle>
            <CardDescription>Your latest interactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                  <div
                    className={`h-2 w-2 rounded-full ${
                      activity.status === 'success' ? 'bg-green-500' : 'bg-red-500'
                    }`}
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
