

export default function Projects() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 flex flex-row justify-center" id="PROJECTS">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_450px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block py-1 text-indigo-600 font-semibold">Recent Project</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Appic Todolist</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Appic Todolist mobile app is a game-changing solution that streamlines productivity and enhances user
                experience. With its intuitive interface and powerful features, it's the ultimate tool for modern
                professionals.
              </p>
            </div>
            <ul className="grid gap-2">
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-indigo-600" />
                Seamless task management
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-indigo-600" />
                Integrated calendar and scheduling
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-indigo-600" />
                Powerful analytics and reporting
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
          <img
            src="/images/Todolist.jpg"
            alt="todoist App"
            className=""
          />
          </div>
          
        </div>
      </div>
    </section>
  )
}

function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}














































// /*
//   This example requires some changes to your config:
  
//   ```
//   // tailwind.config.js
//   module.exports = {
//     // ...
//     plugins: [
//       // ...
//       require('@tailwindcss/aspect-ratio'),
//     ],
//   }
//   ```
// */
// const callouts = [
//     {
//       name: 'AI',
//       description: 'Pair Talking Tips',
//       imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
//       imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
//       href: '#',
//     },
//     {
//       name: 'Real Estate',  
//       description: 'Live Well Home',
//       imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
//       imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
//       href: '#',
//     },
//     {
//       name: 'Financial',
//       description: 'Mortgage Wealth',
//       imageSrc: '../../assets/images/Todolist.jpg',
//       imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
//       href: '#',
//     },
//   ]
  
//   export default function Projects() {
//     return (
//       <div className="bg-white relative" id="PROJECTS">
       
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
//             <h2 className="text-4xl font-bold text-gray-900">Projects</h2>
  
//             <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
//               {callouts.map((callout) => (
//                 <div key={callout.name} className="group relative">
//                   <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
//                     <img
//                       alt={callout.imageAlt}
//                       src={'/images/Todolist.jpg'}
//                       className="h-full w-full object-cover object-center"
//                     />
//                   </div>
//                   <h3 className="mt-6 text-sm text-gray-500">
//                     <a href={callout.href}>
//                       <span className="absolute inset-0" />
//                       {callout.name}
//                     </a>
//                   </h3>
//                   <p className="text-base font-semibold text-gray-900">{callout.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
  