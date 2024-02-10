import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name:"Instant Delivery",
    Icon:ArrowDownToLine,
    description:"Get yout assets delivered to you in seconds and download them "
  },
  {
    name:"Guaranted Quality",
    Icon:CheckCircle,
    description:"Every asset is verified by our professionals "
  },
  {
    name:"For the Planet",
    Icon:Leaf,
    description:"We've pledged 1% of sales to the preservation and restoration of the natural environment "
  }
]

export default function Home() {
  return (
    <>
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl" >
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl" >
          Your MarketPlace for high-Quality <span className="text-blue-600" >digital assets</span>
        </h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground" >
          Welcome To The Shop. Every product is verified by our team in this platform
        </p>
        <div className="flex flex-col  sm:flex-row gap-4 mt-6" >
          <Link href="/" className={buttonVariants()}>
          Browse trending</Link>
          <Button variant="ghost" >
            Our Quality Products &rarr;
          </Button>
        </div>
      </div>

      {/* TODO */}
    </MaxWidthWrapper>
    <section className="border-t border-gray-200 bg-gray-50" >
      <MaxWidthWrapper className="py-20" >
        <div className="grid grid-cols-1 grid-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0 " >
          {perks.map((perk) => (
            <div key={perk.name} className="text-center md:flex md:items-center md:text-left lg:block" >
              <div className="md:flex-shrink-0 flex justify-center" >
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900  " >
                  {<perk.Icon className="w-1/3 h-1/3 "/>}
                </div>
              </div>
              <div className="mt-3 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6 " >
                <h2 className="text-base font-medium text-gray-900 justify-center text-center" >
                  {perk.name}
                </h2>
                <p className="mt-2 pb-10 text-sm text-muted-foreground justify-center text-center" >
                  {perk.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
    </>
  );
  
}
