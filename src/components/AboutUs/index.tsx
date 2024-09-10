// const links = [
//     { name: 'Open roles', href: '#' },
//     { name: 'Internship program', href: '#' },
//     { name: 'Our values', href: '#' },
//     { name: 'Meet our leadership', href: '#' },
//   ]

// const stats = [
//   { name: 'Offices worldwide', value: '12' },
//   { name: 'Full-time colleagues', value: '300+' },
//   { name: 'Hours per week', value: '40' },
//   { name: 'Paid time off', value: 'Unlimited' },
// ]

export default function AboutUsSection() {
  return (
    <div
      className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32"
      id="ABOUTUS"
    >
      <img
        alt=""
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Work with us
          </h2>
          <p className="mt-6 text-xl leading-8 text-gray-300">
            Why Partner with DecodingByte?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Choosing DecodingByte means collaborating with a team that’s
            passionate about technology and driven by results. We believe in
            creating partnerships that go beyond just delivering software; we’re
            here to help you achieve your long-term business goals.
          </p>


          <ul className="list-disc pl-5 text-white">
            <li>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                <p className="font-bold inline">Tailored Solutions:</p> We understand that every project is unique,
                which is why we offer personalized solutions that align with
                your vision.
              </p>
            </li>
            <li>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                <p className="font-bold inline"> Expert Team:</p> Our developers are skilled in the latest
                technologies and committed to continuous learning, ensuring your
                project benefits from cutting-edge innovations.
              </p>
            </li>
            <li>
              <p className="mt-6 text-lg leading-8 text-gray-300">
              <p className="font-bold inline">Collaborative Approach:</p> We work closely with you every step of
                the way, from initial consultation to final deployment, ensuring
                transparency and satisfaction.
              </p>
            </li>
          </ul>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Let’s build something remarkable together. <p className="font-bold inline">Partner with DecodingByte
            today</p>
          </p>
        </div>
      </div>
    </div>
  );
}
