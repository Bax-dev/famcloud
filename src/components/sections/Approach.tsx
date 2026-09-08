export default function Approach() {
  return (
    <section
      id="approach"
      className="border-y border-line bg-signal px-6 py-24 text-background lg:px-10 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div>
          <p className="eyebrow mb-6 text-background/60">Our approach</p>
          <h2 className="text-balance text-5xl tracking-[-0.06em] sm:text-7xl">
            Make change
            <br />
            feel <span className="italic">possible.</span>
          </h2>
        </div>
        <div className="flex flex-col justify-end gap-8">
          <p className="max-w-xl text-xl leading-8">
            No black boxes. No theatre. We work alongside your people to make
            smart technology decisions that stick.
          </p>
          <div className="grid gap-6 border-t border-background/20 pt-6 sm:grid-cols-3">
            <div>
              <p className="font-mono text-3xl">01</p>
              <p className="mt-3 text-sm">Listen deeply</p>
            </div>
            <div>
              <p className="font-mono text-3xl">02</p>
              <p className="mt-3 text-sm">Build deliberately</p>
            </div>
            <div>
              <p className="font-mono text-3xl">03</p>
              <p className="mt-3 text-sm">Leave you stronger</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
