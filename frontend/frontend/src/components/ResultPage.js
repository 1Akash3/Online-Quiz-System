import { motion } from "framer-motion";

export default function ResultPage({ result, name }) {
  const percentage = (result.score / result.total) * 100;

  let message = "Good Try!";
  if (percentage >= 80) message = "Excellent!";
  else if (percentage >= 50) message = "Well Done!";

  return (
    <motion.div
      className="center-box"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2>{name}, Your Score</h2>

      <h1 className="score">
        {result.score} / {result.total}
      </h1>

      <h3>{message}</h3>
    </motion.div>
  );
}