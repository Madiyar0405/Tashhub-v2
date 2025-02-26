import { Calendar1, Trophy, Users, Building, Clock, Database } from 'lucide-react';

export default function Competition() {
  const competition = {
    id: 1,
    title: "Housing Price Prediction",
    host: "Zillow",
    hostLogo: "/zillow-logo.png",
    status: "Active",
    description: "Predict house prices using advanced regression techniques",
    prize: "$10,000",
    deadline: "2024-05-30",
    participants: 1234,
    timeline: {
      start: "2024-01-01",
      end: "2024-05-30",
      evaluation: "2024-06-05"
    },
    overview: "This competition challenges data scientists to build a model that accurately predicts home prices...",
    rules: [
      "One account per participant",
      "Team mergers are not allowed",
      "Final submissions must include code"
    ],
    dataset: {
      size: "1.2GB",
      format: "CSV",
      description: "Historical housing data from 2010-2023"
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="bg-stone-950 border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <div className="flex items-center gap-4">
                <img src={competition.hostLogo} alt={competition.host} className="h-12 w-12" />
                <div>
                  <h1 className="text-3xl font-bold">{competition.title}</h1>
                  <div className="flex items-center gap-2 text-white">
                    <Building size={16} />
                    <span>Hosted by {competition.host}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="px-3 py-1 rounded-full bg-green-100 text-green-800">
                {competition.status}
              </span>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="col-span-2 space-y-8">
          <section className="bg-stone-950 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Overview</h2>
            <p className="text-white">{competition.overview}</p>
          </section>

          <section className="bg-stone-950 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Timeline</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Clock className="text-gray-400" />
                <div>
                  <div className="font-medium">Start Date</div>
                  <div className="text-white">{competition.timeline.start}</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="text-gray-400" />
                <div>
                  <div className="font-medium">End Date</div>
                  <div className="text-white">{competition.timeline.end}</div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-stone-950 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Dataset</h2>
            <div className="flex items-center gap-4">
              <Database className="text-gray-400" />
              <div>
                <div className="font-medium">{competition.dataset.size}</div>
                <div className="text-white">{competition.dataset.description}</div>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="">
          <div className="bg-stone-950 p-6 rounded-lg">
            <h3 className="font-semibold mb-4">Competition Details</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Trophy className="text-gray-400" />
                  <span>Prize</span>
                </div>
                <span className="font-medium">{competition.prize}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users className="text-gray-400" />
                  <span>Participants</span>
                </div>
                <span className="font-medium">{competition.participants}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calendar1 className="text-gray-400" />
                  <span>Deadline</span>
                </div>
                <span className="font-medium">{competition.deadline}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}