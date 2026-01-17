import type { Metadata } from "next"
import Link from "next/link"
import { SignupForm } from "@/components/auth-signup-form"

export const metadata: Metadata = {
  title: "Create Account - KDS Bakery",
  description: "Join KDS Bakery to place custom orders and earn rewards.",
}

export default function SignupPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left Side - Background Image */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div
          className="absolute inset-0 rounded-l-2xl"
          style={{
            backgroundImage: "url(/baker-decorating-custom-three-tier-floral-wedding.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content overlay */}
        <div className="relative z-10 flex flex-col justify-between p-12 text-white">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="font-serif font-bold text-amber-900 text-sm">K</span>
            </div>
            <span className="font-serif text-2xl font-bold">KDS Bakery</span>
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-5xl font-bold leading-tight">Crafting moments of sweetness since 1994.</h2>
            <p className="text-lg text-gray-200 max-w-md">
              Join over 5,000 bread lovers and experience the warmth of our ovens delivered to your door.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white ">
        <div className="w-full max-w-md space-y-8">
          <div className="space-y-3">
            <h1 className="text-4xl font-serif font-bold text-gray-900">Join the Family</h1>
            <p className="text-gray-600">
              Create an account to place custom orders and enjoy exclusive member benefits.
            </p>
          </div>

          <SignupForm />

          <div className="space-y-4">
            <div className="text-center">
              <span className="text-gray-600">Already have an account? </span>
              <Link href="/auth/login" className="font-semibold text-amber-900 hover:underline">
                Sign In
              </Link>
            </div>

            <div className="flex gap-3 pt-4 border-t border-gray-200">
              <Link href="/privacy" className="text-xs text-gray-500 hover:text-gray-700 uppercase tracking-wide">
                Privacy Policy
              </Link>
              <span className="text-gray-300">•</span>
              <Link href="/terms" className="text-xs text-gray-500 hover:text-gray-700 uppercase tracking-wide">
                Terms of Service
              </Link>
              <span className="text-gray-300">•</span>
              <Link href="/accessibility" className="text-xs text-gray-500 hover:text-gray-700 uppercase tracking-wide">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
