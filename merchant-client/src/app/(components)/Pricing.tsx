import { Button } from "@/components/ui/button"

export default function Pricing() {
    return (
        <div className="grid md:grid-cols-3 md:gap-8 items-start w-full max-w-5xl mx-auto">
            <div className="flex flex-col gap-4 md:gap-8 bg-white p-6 rounded-lg shadow-lg border focus:border-[#744FEA]">
                <div className="flex flex-col gap-1.5">
                    <h3 className="font-semibold text-lg text-[#744FEA]">Starter</h3>
                    <p className="text-sm leading-normal text-muted">Perfect for getting started</p>
                    <h4 className="font-bold text-2xl text-[#744FEA]">$9</h4>
                </div>
                <ul className="grid gap-4 text-sm list-disc list-inside">
                    <li>Process Unlimited Payments</li>
                    <li style={{ textDecoration: 'line-through' }}>Activite Three Business</li>
                    <li style={{ textDecoration: 'line-through' }}>Analyze and Predict Financial Trends</li>
                </ul>
                <Button className="bg-[#744FEA] text-white focus:border-[#744FEA]" variant="outline">
                    Select
                </Button>
            </div>
            <div className="flex flex-col gap-4 md:gap-8 bg-white p-6 rounded-lg shadow-lg border focus:border-[#744FEA]">
                <div className="flex flex-col gap-1.5">
                    <h3 className="font-semibold text-lg text-[#744FEA]">Pro</h3>
                    <p className="text-sm leading-normal text-muted">More power for your projects</p>
                    <h4 className="font-bold text-2xl text-[#744FEA]">$19</h4>
                </div>
                <ul className="grid gap-4 text-sm list-disc list-inside">
                    <li>Process Unlimited Payments</li>
                    <li >Activite Three Business</li>
                    <li style={{ textDecoration: 'line-through' }}>Analyze and Predict Financial Trends</li>
                </ul>
                <Button className="bg-[#744FEA] text-white focus:border-[#744FEA]">Select</Button>
            </div>
            <div className="flex flex-col gap-4 md:gap-8 bg-white p-6 rounded-lg shadow-lg border focus:border-[#744FEA]">
                <div className="flex flex-col gap-1.5">
                    <h3 className="font-semibold text-lg text-[#744FEA]">Business</h3>
                    <p className="text-sm leading-normal text-muted">Advanced features for teams</p>
                    <h4 className="font-bold text-2xl text-[#744FEA]">$49</h4>
                </div>
                <ul className="grid gap-4 text-sm list-disc list-inside">
                    <li>Process Unlimited Payments</li>
                    <li >Activite Three Business</li>
                    <li style={{ textDecoration: 'line-through' }}>Analyze and Predict Financial Trends</li>
                </ul>
                <Button className="bg-[#744FEA] text-white focus:border-[#744FEA]" variant="outline">
                    Select
                </Button>
            </div>
        </div>
    )
}

