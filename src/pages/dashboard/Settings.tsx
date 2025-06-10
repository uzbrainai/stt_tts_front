
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Settings as SettingsIcon, User, Cog } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useTranslation } from 'react-i18next';

const Settings = () => {
  const { theme, toggleTheme } = useTheme();
  const { i18n } = useTranslation();
  const [userInfo, setUserInfo] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    company: 'Acme Corporation',
    timezone: 'UTC-8 (Pacific Time)',
  });

  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    smsAlerts: false,
    apiUsageAlerts: true,
    securityAlerts: true,
  });

  const handleUserInfoChange = (field: string, value: string) => {
    setUserInfo(prev => ({ ...prev, [field]: value }));
  };

  const handleNotificationChange = (field: string) => {
    setNotifications(prev => ({ ...prev, [field]: !prev[field as keyof typeof prev] }));
  };

  const handleSaveUserInfo = () => {
    console.log('Saving user info:', userInfo);
    // Handle save logic here
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <SettingsIcon className="h-8 w-8" />
          Settings
        </h1>
        <p className="text-muted-foreground">
          Manage your account preferences and site settings
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-4 w-4" />
              User Information
            </CardTitle>
            <CardDescription>Update your personal information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">First Name</label>
                <input
                  type="text"
                  value={userInfo.firstName}
                  onChange={(e) => handleUserInfoChange('firstName', e.target.value)}
                  className="w-full mt-1 p-2 border rounded"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Last Name</label>
                <input
                  type="text"
                  value={userInfo.lastName}
                  onChange={(e) => handleUserInfoChange('lastName', e.target.value)}
                  className="w-full mt-1 p-2 border rounded"
                />
              </div>
            </div>
            
            <div>
              <label className="text-sm font-medium">Email Address</label>
              <input
                type="email"
                value={userInfo.email}
                onChange={(e) => handleUserInfoChange('email', e.target.value)}
                className="w-full mt-1 p-2 border rounded"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Phone Number</label>
                <input
                  type="tel"
                  value={userInfo.phone}
                  onChange={(e) => handleUserInfoChange('phone', e.target.value)}
                  className="w-full mt-1 p-2 border rounded"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Company</label>
                <input
                  type="text"
                  value={userInfo.company}
                  onChange={(e) => handleUserInfoChange('company', e.target.value)}
                  className="w-full mt-1 p-2 border rounded"
                />
              </div>
            </div>
            
            <div>
              <label className="text-sm font-medium">Timezone</label>
              <select 
                value={userInfo.timezone}
                onChange={(e) => handleUserInfoChange('timezone', e.target.value)}
                className="w-full mt-1 p-2 border rounded"
              >
                <option value="UTC-8 (Pacific Time)">UTC-8 (Pacific Time)</option>
                <option value="UTC-5 (Eastern Time)">UTC-5 (Eastern Time)</option>
                <option value="UTC+0 (GMT)">UTC+0 (GMT)</option>
                <option value="UTC+1 (Central European Time)">UTC+1 (Central European Time)</option>
              </select>
            </div>
            
            <Button onClick={handleSaveUserInfo} className="w-full">
              Save Changes
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cog className="h-4 w-4" />
              Site Preferences
            </CardTitle>
            <CardDescription>Customize your site experience</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="text-sm font-medium mb-3">Theme</h4>
              <div className="flex gap-2">
                <Button
                  variant={theme === 'light' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => theme === 'dark' && toggleTheme()}
                >
                  Light Mode
                </Button>
                <Button
                  variant={theme === 'dark' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => theme === 'light' && toggleTheme()}
                >
                  Dark Mode
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-3">Language</h4>
              <div className="flex gap-2">
                <Button
                  variant={i18n.language === 'en' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => changeLanguage('en')}
                >
                  English
                </Button>
                <Button
                  variant={i18n.language === 'es' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => changeLanguage('es')}
                >
                  Español
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-3">Notifications</h4>
              <div className="space-y-3">
                {Object.entries(notifications).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between">
                    <label className="text-sm">
                      {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </label>
                    <button
                      onClick={() => handleNotificationChange(key)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        value ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          value ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Security Settings</CardTitle>
            <CardDescription>Manage your account security</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full">
              Change Password
            </Button>
            <Button variant="outline" className="w-full">
              Enable Two-Factor Authentication
            </Button>
            <Button variant="outline" className="w-full">
              Download Account Data
            </Button>
            <Button variant="destructive" className="w-full">
              Delete Account
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
