import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { revealLink } from "../api";

function Reveal() {
  const { id } = useParams();
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const data = await revealLink(id);
        setMessage(data.message);
      } catch (error) {
        setMessage("Este enlace no existe o ya fue visto.");
      }
    };
    fetchMessage();
  }, [id]);

  return <div>{message}</div>;
}

export default Reveal;
