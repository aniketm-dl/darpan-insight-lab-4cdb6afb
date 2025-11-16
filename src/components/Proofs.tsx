import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const timeToShipData = [
  { name: 'Darpan Labs', days: 3 },
  { name: 'Traditional Research', days: 21 },
];

const abTestData = [
  { week: 'Week 1', simulated: 65, actual: 62 },
  { week: 'Week 2', simulated: 72, actual: 70 },
  { week: 'Week 3', simulated: 78, actual: 76 },
  { week: 'Week 4', simulated: 85, actual: 83 },
  { week: 'Week 5', simulated: 88, actual: 87 },
  { week: 'Week 6', simulated: 91, actual: 90 },
];

const Proofs = () => {
  return (
    <section className="py-24 bg-background relative scroll-reveal" id="proofs">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm md:text-base font-mono mb-4 tracking-wider">
            [ PROOFS ]
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            What does data say?
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
            Real metrics from teams using digital twin research vs traditional methods
          </p>
        </div>

        {/* Charts Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Time to Ship Chart */}
          <div className="bg-card border border-border rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="text-accent">⚡</span>
              Time to Ship New Features
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={timeToShipData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="name" 
                  stroke="hsl(var(--muted-foreground))"
                  tick={{ fill: 'hsl(var(--muted-foreground))' }}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  tick={{ fill: 'hsl(var(--muted-foreground))' }}
                  label={{ value: 'Days', angle: -90, position: 'insideLeft', fill: 'hsl(var(--muted-foreground))' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                    color: 'hsl(var(--foreground))'
                  }}
                />
                <Bar dataKey="days" fill="hsl(var(--accent))" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              <span className="text-accent font-semibold">7x faster</span> feature validation
            </p>
          </div>

          {/* A/B Test Response Chart */}
          <div className="bg-card border border-border rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="text-accent">📊</span>
              A/B Test Response Accuracy
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={abTestData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="week" 
                  stroke="hsl(var(--muted-foreground))"
                  tick={{ fill: 'hsl(var(--muted-foreground))' }}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  tick={{ fill: 'hsl(var(--muted-foreground))' }}
                  label={{ value: 'Accuracy %', angle: -90, position: 'insideLeft', fill: 'hsl(var(--muted-foreground))' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                    color: 'hsl(var(--foreground))'
                  }}
                />
                <Legend 
                  wrapperStyle={{ color: 'hsl(var(--foreground))' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="simulated" 
                  stroke="hsl(var(--accent))" 
                  strokeWidth={2}
                  dot={{ fill: 'hsl(var(--accent))', r: 4 }}
                  name="Simulated"
                />
                <Line 
                  type="monotone" 
                  dataKey="actual" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={2}
                  dot={{ fill: 'hsl(var(--primary))', r: 4 }}
                  name="Actual"
                />
              </LineChart>
            </ResponsiveContainer>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              <span className="text-accent font-semibold">95%+ correlation</span> between simulated and real user behavior
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proofs;