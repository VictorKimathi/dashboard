import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BankCard from '@/components/BankCard'
import Category from '@/components/Category'

// Hardcoded user, banks, and transaction categories for demonstration
const hardcodedUser = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
}

const hardcodedBanks = [
  {
    $id: 'bank1',
    name: 'Bank of America',
    balance: 1200.50,
    accountNumber: '1234',
  },
  {
    $id: 'bank2',
    name: 'Chase Bank',
    balance: 4500.75,
    accountNumber: '5678',
  },
]

const hardcodedCategories = [
  { name: 'Groceries', count: 5 },
  { name: 'Utilities', count: 3 },
  { name: 'Rent', count: 2 },
  { name: 'Entertainment', count: 4 },
]

// Define topCategoryStyles
const topCategoryStyles: Record<string, { bg: string; indicator: string; icon: string }> = {
  Groceries: { bg: 'bg-green-200', indicator: 'green', icon: 'groceries-icon' },
  Utilities: { bg: 'bg-blue-200', indicator: 'blue', icon: 'utilities-icon' },
  Rent: { bg: 'bg-red-200', indicator: 'red', icon: 'rent-icon' },
  Entertainment: { bg: 'bg-yellow-200', indicator: 'yellow', icon: 'entertainment-icon' },
  default: { bg: 'bg-gray-200', indicator: 'gray', icon: 'default-icon' },
}

// Type guard to verify if a category name is valid
function isTopCategory(key: string): key is keyof typeof topCategoryStyles {
  return key in topCategoryStyles;
}

const RightSidebar = () => {
  const user = hardcodedUser;
  const banks = hardcodedBanks;
  const categories = hardcodedCategories;

  return (
    <aside className="right-sidebar m-32">
      <section className="flex flex-col pb-8">
        <div className="h-[120px] w-full bg-gradient-mesh bg-cover bg-no-repeat" />
        <div className="relative flex px-6 max-xl:justify-center">
          <div className="flex-center absolute -top-8 size-24 rounded-full bg-gray-100 border-8 border-white p-2 shadow-profile">
            <span className="text-5xl font-bold text-blue-500">
              {user.firstName[0]}
            </span>
          </div>

          <div className="flex flex-col pt-24">
            <h1 className="text-24 font-semibold text-gray-900">
              {user.firstName} {user.lastName}
            </h1>
            <p className="text-16 font-normal text-gray-600">
              {user.email}
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-between gap-8 px-6 py-8">
        <div className="flex w-full justify-between">
          <h2 className="header-2">My Banks</h2>
          <Link href="/" className="flex gap-2">
            <Image 
              src="/icons/plus.svg"
              width={20}
              height={20}
              alt="plus"
            />
            <h2 className="text-14 font-semibold text-gray-600">
              Add Bank
            </h2>
          </Link>
        </div>

        {banks.length > 0 && (
          <div className="relative  bg-black-100 flex flex-1 flex-col items-center justify-center gap-5">
            <div className="relative z-10">
              <BankCard 
                key={banks[0].$id}
                account={banks[0]}
                userName={`${user.firstName} ${user.lastName}`}
                showBalance={false}
              />
            </div>
            {banks[1] && (
              <div className="absolute bg-slate-800 right-0 top-8 z-0 w-[90%]">
                <BankCard 
                  key={banks[1].$id}
                  account={banks[1]}
                  userName={`${user.firstName} ${user.lastName}`}
                  showBalance={false}
                />
              </div>
            )}
          </div>
        )}

        <div className="mt-10 flex flex-1 flex-col gap-6">
          <h2 className="header-2">Top categories</h2>

          <div className="space-y-5">
            {categories.map((category) => {
              const {
                bg: progressBg,
                indicator,
                icon,
              } = isTopCategory(category.name)
                ? topCategoryStyles[category.name]
                : topCategoryStyles.default;

              return (
                <Category 
                  key={category.name}
                  category={{
                    ...category,
                    progressBg,
                    indicator,
                    icon
                  }} 
                />
              );
            })}
          </div>
        </div>
      </section>
    </aside>
  )
}

export default RightSidebar;
