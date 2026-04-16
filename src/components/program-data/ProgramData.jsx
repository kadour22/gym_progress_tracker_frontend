import React, { useEffect, useState } from "react";
import { UserAPI } from "../../api/api";

const ProgramData = () => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const res = await UserAPI.program_data();
        setPrograms(res.data);
      } catch (err) {
        console.error("Error fetching program data", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPrograms();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0b0b0b] flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white px-4 md:px-10 py-10">
      <h1 className="text-3xl font-bold mb-8">Your Programs</h1>

      <div className="space-y-10">
        {programs.map((item, index) => {
          const data = item.data;

          return (
            <div
              key={index}
              className="bg-[#111] p-6 rounded-2xl space-y-6"
            >
              {/* Header */}
              <div>
                <h2 className="text-2xl font-bold text-lime-400">
                  {data.program_name}
                </h2>
                <p className="text-gray-400 text-sm">
                  {data.goal} • {data.duration} • {data.days_per_week} days/week
                </p>
              </div>

              {/* Warmup */}
              <div>
                <h3 className="font-semibold mb-2">Warmup</h3>
                <ul className="text-sm text-gray-300 space-y-1">
                  {data.warmup?.map((w, i) => (
                    <li key={i}>
                      {w.exercise} - {w.duration}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Days */}
              <div className="space-y-6">
                {data.days?.map((day, i) => (
                  <div key={i} className="bg-[#1a1a1a] p-4 rounded-xl">
                    <h4 className="text-lg font-semibold text-lime-400">
                      {day.day} - {day.focus}
                    </h4>

                    <div className="mt-3 space-y-2 text-sm text-gray-300">
                      {day.exercises?.map((ex, j) => (
                        <div
                          key={j}
                          className="border-b border-gray-800 pb-2"
                        >
                          <p className="font-medium">{ex.name}</p>
                          <p className="text-gray-400 text-xs">
                            {ex.sets} sets • {ex.reps} reps • {ex.rest} rest
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Cooldown */}
              <div>
                <h3 className="font-semibold mb-2">Cooldown</h3>
                <ul className="text-sm text-gray-300 space-y-1">
                  {data.cooldown?.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>

              {/* Tips */}
              <div>
                <h3 className="font-semibold mb-2">Tips</h3>
                <ul className="text-sm text-gray-400 space-y-1">
                  {data.general_tips?.map((t, i) => (
                    <li key={i}>• {t}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgramData;