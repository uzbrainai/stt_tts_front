import React, {useEffect, useState} from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {CreditCard, DollarSign, History} from 'lucide-react';
import instance from "@/config/axios_config";

const Billing = () => {
    const [topUpAmount, setTopUpAmount] = useState(50);
    const [transactions, setTransactions] = useState<{
        _meta: {
            totalElements: number,
            totalPages: number,
            page: number,
            size: number
        },
        items: []
    }>({
        _meta: {
            totalElements: 0,
            totalPages: 0,
            page: 1,
            size: 0
        },
        items: []
    })

    const handleTopUp = () => {
        console.log(`Top up account with $${topUpAmount}`);
    };

    useEffect(() => {
        (
            async () => {
                try {
                    let resp = await instance({
                        method: "get",
                        url: "users/account-flows"
                    });
                    if (resp?.data?.status === 1) {

                    }
                } catch (e: any) {
                    console.log(e);
                }
            }
        )()
    }, [])

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold flex items-center gap-2">
                    <CreditCard className="h-8 w-8"/>
                    Billing & Payments
                </h1>
                <p className="text-muted-foreground">
                    Manage your account balance and payment methods
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <DollarSign className="h-4 w-4"/>
                            Account Balance
                        </CardTitle>
                        <CardDescription>Current account credit</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="text-center">
                            <p className="text-4xl font-bold text-green-600">$127.50</p>
                            <p className="text-sm text-muted-foreground">Available Credit</p>
                        </div>

                        <div className="space-y-4 pt-4 border-t">
                            <h4 className="font-medium">Top Up Account</h4>
                            <div className="grid grid-cols-4 gap-2">
                                {[25, 50, 100, 200].map((amount) => (
                                    <Button
                                        key={amount}
                                        variant={topUpAmount === amount ? 'default' : 'outline'}
                                        size="sm"
                                        onClick={() => setTopUpAmount(amount)}
                                    >
                                        ${amount}
                                    </Button>
                                ))}
                            </div>
                            <div className="flex gap-2">
                                <input
                                    type="number"
                                    value={topUpAmount}
                                    onChange={(e) => setTopUpAmount(Number(e.target.value))}
                                    className="flex-1 p-2 border rounded text-sm"
                                    placeholder="Custom amount"
                                />
                                <Button onClick={handleTopUp} className="px-6">
                                    Top Up ${topUpAmount}
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Payment Methods</CardTitle>
                        <CardDescription>Manage your payment options</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="border rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    <CreditCard className="h-4 w-4"/>
                                    <span className="text-sm font-medium">•••• •••• •••• 4242</span>
                                </div>
                                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Primary</span>
                            </div>
                            <div className="text-xs text-muted-foreground">
                                <p>Visa ending in 4242</p>
                                <p>Expires 12/2027</p>
                            </div>
                        </div>

                        <Button variant="outline" className="w-full">
                            Add Payment Method
                        </Button>

                        <div className="text-xs text-muted-foreground space-y-1">
                            <p>• Payments are processed securely</p>
                            <p>• You can change your payment method anytime</p>
                            <p>• Auto top-up available for uninterrupted service</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <History className="h-4 w-4"/>
                        Transaction History
                    </CardTitle>
                    <CardDescription>Your recent billing transactions</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {transactions?.items?.map((transaction: any) => (
                            <div key={transaction?.id} className="flex items-center justify-between border-b pb-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-sm font-medium">{transaction.type}</span>
                                        <span className={`text-xs px-2 py-1 rounded ${
                                            transaction.status === 'completed'
                                                ? 'bg-green-100 text-green-800'
                                                : 'bg-yellow-100 text-yellow-800'
                                                }`}>
                                          {transaction.status}
                                        </span>
                                    </div>
                                    <p className="text-xs text-muted-foreground">{new Date(transaction.lastPaymentDate).toLocaleString()}</p>
                                </div>
                                <div className="text-right">
                                    <p className={`text-sm font-medium ${
                                        transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                                    }`}>
                                        {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Billing;
