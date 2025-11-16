import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";

const timeToShipData = [
  { name: "Traditional Research", days: 21 },
  { name: "Darpan Labs", days: 3 },
];

const abTestData = [
  { week: "Week 1", simulated: 65, actual: 62 },
  { week: "Week 2", simulated: 72, actual: 70 },
  { week: "Week 3", simulated: 78, actual: 76 },
  { week: "Week 4", simulated: 85, actual: 83 },
  { week: "Week 5", simulated: 88, actual: 87 },
  { week: "Week 6", simulated: 91, actual: 90 },
];

const Proofs = () => {
  return (
    <section className="py-24 bg-background relative scroll-reveal" id="proofs">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm md:text-base font-mono mb-4 tracking-wider">[ PROOFS ]</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">What does data say?</h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light mb-4">
            Evidence from early teams using AI twins — faster validation, higher predictive accuracy.
          </p>
          <p className="text-primary text-sm md:text-base max-w-2xl mx-auto italic">
            When behaviour is simulated, decisions get validated — not delayed.
          </p>
        </div>

        {/* Charts Grid */}
        <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {/* Time to Ship Chart */}
          <div
            className="bg-card border border-border rounded-lg p-6 backdrop-blur-sm flex flex-col"
            style={{ boxShadow: "0px 0px 15px rgba(198, 255, 62, 0.06)" }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="text-primary"></span>
              Time to Ship New Features
            </h3>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={timeToShipData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(198, 255, 62, 0.08)" strokeOpacity={0.3} />
                <XAxis dataKey="name" stroke="#A0A0A0" tick={{ fill: "#A0A0A0", fontSize: 12 }} />
                <YAxis
                  stroke="#A0A0A0"
                  tick={{ fill: "#A0A0A0" }}
                  label={{ value: "Days", angle: -90, position: "insideLeft", fill: "#A0A0A0" }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                    color: "hsl(var(--foreground))",
                  }}
                />
                <Bar dataKey="days" radius={[8, 8, 0, 0]}>
                  {timeToShipData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.name === "Darpan Labs" ? "#C6FF3E" : "#4A90E2"}
                      stroke={entry.name === "Darpan Labs" ? "#C6FF3E" : "#4A90E2"}
                      strokeWidth={2}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-auto pt-4 border-t border-border">
              <p className="text-xs font-mono text-center" style={{ color: "#C6FF3E" }}>
                7× faster feature validation
              </p>
            </div>
          </div>

          {/* A/B Test Response Chart */}
          <div
            className="bg-card border border-border rounded-lg p-6 backdrop-blur-sm flex flex-col"
            style={{ boxShadow: "0px 0px 15px rgba(198, 255, 62, 0.06)" }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="text-primary"></span>
              A/B Test Response Accuracy
            </h3>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={abTestData} margin={{ left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(198, 255, 62, 0.08)" strokeOpacity={0.3} />
                <XAxis dataKey="week" stroke="#A0A0A0" tick={{ fill: "#A0A0A0", fontSize: 12 }} />
                <YAxis
                  stroke="#A0A0A0"
                  tick={{ fill: "#A0A0A0" }}
                  label={{ value: "Behavioral Match (%)", angle: -90, position: "insideLeft", fill: "#A0A0A0", style: { textAnchor: 'middle' } }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                    color: "hsl(var(--foreground))",
                  }}
                />
                <Legend wrapperStyle={{ color: "#A0A0A0", fontSize: 12 }} />
                <Line
                  type="monotone"
                  dataKey="simulated"
                  stroke="#C6FF3E"
                  strokeWidth={3}
                  dot={{ fill: "#C6FF3E", r: 6, strokeWidth: 0 }}
                  name="Simulated"
                />
                <Line
                  type="monotone"
                  dataKey="actual"
                  stroke="#4A90E2"
                  strokeWidth={2}
                  dot={{ fill: "#4A90E2", r: 5, strokeWidth: 0 }}
                  name="Actual"
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="mt-auto pt-4 border-t border-border">
              <p className="text-xs font-mono text-center" style={{ color: "#C6FF3E" }}>
                95%+ correlation between simulated and real user behaviour after 6 weeks
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proofs;
