const WhyWeBuild = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-medium mb-8 text-foreground">Why We Built This?</h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
          We learned that most research fails not because teams don't try, but because people behave differently when
          they know they're being watched.
          <br />
          <br />
          Surveys capture intentions, not actions — and decisions built on intentions often miss the mark in the real world.
        </p>
      </div>
    </section>
  );
};

export default WhyWeBuild;
