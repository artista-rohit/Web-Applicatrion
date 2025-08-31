import React from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Male', value: 400 },
  { name: 'Female', value: 300 },
  { name: 'Transgender', value: 100 },
  { name: 'Other', value: 200 },
];

const RADIAN = Math.PI / 180;
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// Custom labels inside pie slices
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
  const y = cy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${((percent ?? 0) * 100).toFixed(0)}%`}
    </text>
  );
};

// Custom legend to include percentages
const renderCustomLegend = ({ payload }) => {
  const total = data.reduce((sum, entry) => sum + entry.value, 0);

  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'center' }}>
      {payload.map((entry, index) => {
        const percentage = ((entry.value / total) * 100).toFixed(0);
        return (
          <li key={`legend-${index}`} style={{ display: 'inline-block', margin: '0 10px' }}>
            <span
              style={{
                display: 'inline-block',
                width: 10,
                height: 10,
                backgroundColor: entry.color,
                borderRadius: '50%',
                marginRight: 6,
              }}
            />
            {entry.value
              ? `${entry.value} (${percentage}%)`
              : `${entry.payload.name} (${percentage}%)`}
          </li>
        );
      })}
    </ul>
  );
};

const BuyerProfileChart = () => {
  return (
    <div className="flex flex-col gap-2 bg-gray-200 rounded-2xl p-4 w-90">
      <h6 className="font-semibold">Buyer Profile</h6>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="45%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${entry.name}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>

            {/* Custom Legend with percentages */}
            <Legend
              verticalAlign="bottom"
              align="center"
              layout="horizontal"
              content={renderCustomLegend}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BuyerProfileChart;
