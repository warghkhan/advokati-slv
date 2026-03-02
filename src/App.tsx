
function App() {
  return (
    <div className="flex flex-col gap-5 top-2 relative">
      <h1 className="flex justify-center text-6xl font-headers uppercase font-bold">Заголовки секций</h1>
      <div className="flex justify-center text-4xl font-sub-headers font-medium">Подзаголовки</div>
      <div className="flex justify-center text-3xl font-main-content font-medium">Основной контент</div>
      <div className="flex justify-center text-1xl font-main-content font-light italic">Дополнительный контент</div>
    </div>
  );
}

export default App;
