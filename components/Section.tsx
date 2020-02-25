export default function Section({ children }) {
  return (
    <div className="section">
      {children}
      <style jsx>{`
        .section {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

      `}</style>
    </div>
  );
}
