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
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light mb-4">
            Evidence from early teams using AI twins — faster validation, higher predictive accuracy.
          </p>
          <p className="text-primary text-sm md:text-base max-w-2xl mx-auto italic">
            When behaviour is simulated, decisions get validated — not delayed.
          </p>
        </div>

        {/* Charts Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Time to Ship Chart */}
          <div className="bg-card border border-border rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="text-primary">⚡</span>
              Time to Ship New Features
            </h3>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={timeToShipData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="name" 
                  stroke="hsl(var(--muted-foreground))"
                  tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
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
                <Bar 
                  dataKey="days" 
                  radius={[8, 8, 0, 0]}
                  fill="hsl(var(--muted))"
                >
                  {timeToShipData.map((entry, index) => (
                    <rect 
                      key={`bar-${index}`}
                      fill={entry.name === 'Darpan Labs' ? 'hsl(var(--primary))' : 'hsl(var(--muted))'}
                      stroke={entry.name === 'Darpan Labs' ? 'hsl(var(--primary))' : 'transparent'}
                      strokeWidth={entry.name === 'Darpan Labs' ? 2 : 0}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-xs text-primary font-mono text-center">
                7× faster feature validation
              </p>
            </div>
          </div>

          {/* A/B Test Response Chart */}
          <div className="bg-card border border-border rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="text-primary">📊</span>
              A/B Test Response Accuracy
            </h3>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={abTestData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="week" 
                  stroke="hsl(var(--muted-foreground))"
                  tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
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
                  wrapperStyle={{ color: 'hsl(var(--foreground))', fontSize: 12 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="simulated" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={3}
                  dot={{ fill: 'hsl(var(--primary))', r: 5, strokeWidth: 2, stroke: 'hsl(var(--primary))' }}
                  name="Simulated"
                />
                <Line 
                  type="monotone" 
                  dataKey="actual" 
                  stroke="hsl(var(--muted))" 
                  strokeWidth={2}
                  dot={{ fill: 'hsl(var(--muted))', r: 4 }}
                  name="Actual"
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-xs text-primary font-mono text-center">
                95%+ correlation between simulated and real user behaviour after 6 weeks
              </p>
            </div>
          </div>

          {/* Cost Per Insight Card */}
          <div className="bg-card border border-border rounded-lg p-6 backdrop-blur-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <span className="text-primary">💰</span>
                Cost Per Insight
              </h3>
              <div className="space-y-8 mt-12">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Darpan Labs</p>
                  <p className="text-4xl font-bold text-primary">~$5K</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Traditional Research</p>
                  <p className="text-4xl font-bold text-muted">~$30–65K</p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-border">
              <p className="text-xs text-primary font-mono text-center">
                6–13× more cost-effective
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proofs;