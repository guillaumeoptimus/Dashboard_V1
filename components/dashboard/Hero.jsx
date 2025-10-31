export default function Hero(){
  return (
    <div className="relative overflow-hidden card p-6">
      <div className="flex items-center gap-4">
        <img src="/assistant-avatar.svg" alt="Assistant IA" className="w-14 h-14 rounded-full border"/>
        <div>
          <div className="text-sm text-gray-500">Assistant IA</div>
          <h1 className="text-2xl md:text-3xl font-semibold">Bonjour Guillaume — prêt à avancer 🚀</h1>
          <p className="text-sm text-gray-500">Vue d’ensemble, tâches du jour, et CRM à portée.</p>
        </div>
      </div>
      <div className="absolute right-6 top-6 text-xs text-gray-400">Dashboard</div>
    </div>
  );
}
