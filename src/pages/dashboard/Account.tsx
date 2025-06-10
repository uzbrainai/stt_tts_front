
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, History, CreditCard } from 'lucide-react';

const Account = () => {
  const accountHistory = [
    { id: 1, action: 'Account created', date: '2024-01-01', details: 'Welcome to VoiceAI' },
    { id: 2, action: 'Profile updated', date: '2024-01-05', details: 'Contact information updated' },
    { id: 3, action: 'API key generated', date: '2024-01-10', details: 'First API key created' },
    { id: 4, action: 'Payment method added', date: '2024-01-12', details: 'Credit card ending in 4242' },
    { id: 5, action: 'Subscription upgraded', date: '2024-01-15', details: 'Upgraded to Professional plan' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <User className="h-8 w-8" />
          Account Information
        </h1>
        <p className="text-muted-foreground">
          Manage your account details and view activity
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Account Details</CardTitle>
            <CardDescription>Your account information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">Account ID</label>
                <p className="text-sm font-mono">#VA-2024-001234</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Member Since</label>
                <p className="text-sm">January 1, 2024</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">Plan Type</label>
                <p className="text-sm">Professional</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Status</label>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Active
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">Current Balance</label>
                <p className="text-lg font-semibold text-green-600">$127.50</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">API Quota</label>
                <p className="text-sm">8,500 / 10,000 calls</p>
              </div>
            </div>

            <div className="pt-4 border-t">
              <h4 className="text-sm font-medium mb-2">Contact Information</h4>
              <div className="space-y-2">
                <div>
                  <label className="text-xs text-muted-foreground">Email</label>
                  <p className="text-sm">john.doe@example.com</p>
                </div>
                <div>
                  <label className="text-xs text-muted-foreground">Phone</label>
                  <p className="text-sm">+1 (555) 123-4567</p>
                </div>
                <div>
                  <label className="text-xs text-muted-foreground">Company</label>
                  <p className="text-sm">Acme Corporation</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <History className="h-4 w-4" />
              Account History
            </CardTitle>
            <CardDescription>Recent account activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {accountHistory.map((item) => (
                <div key={item.id} className="border-l-2 border-blue-200 pl-4 pb-4">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-sm font-medium">{item.action}</h4>
                    <span className="text-xs text-muted-foreground">{item.date}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{item.details}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-4 w-4" />
            Usage Summary
          </CardTitle>
          <CardDescription>Your service usage this month</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 border rounded-lg">
              <p className="text-2xl font-bold text-blue-600">1,234</p>
              <p className="text-sm text-muted-foreground">STT Requests</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <p className="text-2xl font-bold text-green-600">987</p>
              <p className="text-sm text-muted-foreground">TTS Requests</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <p className="text-2xl font-bold text-purple-600">456</p>
              <p className="text-sm text-muted-foreground">Auth Requests</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <p className="text-2xl font-bold text-orange-600">123</p>
              <p className="text-sm text-muted-foreground">Watermark Ops</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Account;
