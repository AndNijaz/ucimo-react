function Button({ disabled, children }) {
  return (
    <button
      disabled={disabled}
      className="uppercase-800 inline-block rounded-lg bg-yellow-400 px-4 py-3 font-semibold tracking-wide text-stone-800 transition-all duration-300 hover:bg-yellow-300"
    >
      {children}
    </button>
  );
}

export default Button;
