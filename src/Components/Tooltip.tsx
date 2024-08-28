function Tooltip({ text }: { text: string }) {
  return (
    <div className="absolute bg-dark-blue text-white whitespace-nowrap shadow-lg p-2 rounded-md text-xs -top-8 -left-6">
      {text}
    </div>
  );
}

export default Tooltip;
