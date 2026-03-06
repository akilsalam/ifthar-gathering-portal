import React, { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, UtensilsCrossed, Pizza, Coffee, Drumstick, Laugh, X } from "lucide-react";
import Confetti from "react-confetti";

const invitedNumbers: string[] = [
  
  "9847478690",
  "9778400673",
  "9947016699",
  "9446768668",
  "9207621731",
  "9567318444",
  "9995336849"
];

const Ifthar2026: React.FC = () => {
  const [phone, setPhone] = useState<string>("");
  const [invited, setInvited] = useState<boolean>(false);
  const [showCard, setShowCard] = useState<boolean>(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const [windowSize, setWindowSize] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });

  // Spinner states
  const wheelOptions = [
    "Invited",
    "Not Invited",
    "Better Luck Next Time",
    "Surprise Gift",
  ];

  const slice = 360 / wheelOptions.length;

  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState("");

  // ADDED
  const [showResultModal, setShowResultModal] = useState(false);
  const [giftCode, setGiftCode] = useState("");

  useEffect(() => {
    if (heroRef.current) heroRef.current.classList.add("animate-fadeIn");

    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePhoneSubmit = () => {
    if (phone.trim() === "") return;

    setInvited(invitedNumbers.includes(phone));
    setShowCard(true);
  };

  const handleClose = () => {
    setShowCard(false);
    setPhone("");
    setResult("");
  };

  // ADDED
  const generateCode = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  };

  const spinWheel = () => {
    if (spinning) return;

    setSpinning(true);

    const isInvited = invitedNumbers.includes(phone);

    let targetIndex;

  
  if (isInvited) {
    // Always land on "Invited"
    targetIndex = 0;
  } else {
    // Non-invited: 80% chance for "Surprise Gift", 20% for others
    const rand = Math.random(); // 0 - 1

    if (rand < 0.8) {
      targetIndex = 3; // "Surprise Gift"
    } else {
      // Pick between "Not Invited" and "Better Luck Next Time"
      targetIndex = Math.random() < 0.5 ? 1 : 2;
    }
  }
    const extraSpins = 5 * 360;

    const finalRotation =
      extraSpins + (360 - targetIndex * slice - slice / 2);

    setRotation(finalRotation);

    setTimeout(() => {
      const res = wheelOptions[targetIndex];
      setResult(res);

      // ADDED
      if (res === "Invited" || res === "Surprise Gift") {
        setGiftCode(generateCode());
      }

      setShowResultModal(true);
      // END ADDED

      setSpinning(false);
    }, 4000);
  };

  const FloatingIcons: React.FC = () => (
    <div className="absolute w-full h-full overflow-hidden pointer-events-none">
      <UtensilsCrossed
        className="absolute text-iftar-gold/30 w-16 md:w-24 h-16 md:h-24 top-[15%] left-[10%] animate-float"
        style={{ animationDelay: "0.5s" }}
      />
      <Pizza
        className="absolute text-iftar-gold/30 w-14 md:w-20 h-14 md:h-20 bottom-[20%] right-[15%] animate-float"
        style={{ animationDelay: "1.2s" }}
      />
      <Coffee
        className="absolute text-iftar-gold/30 w-12 md:w-16 h-12 md:h-16 top-[25%] right-[20%] animate-float"
        style={{ animationDelay: "0.8s" }}
      />
      <Drumstick
        className="absolute text-iftar-gold/30 w-12 md:w-18 h-12 md:h-18 bottom-[30%] left-[25%] animate-float-reverse"
        style={{ animationDelay: "1.5s" }}
      />
      <Laugh
        className="absolute text-iftar-gold/30 w-10 md:w-14 h-10 md:h-14 top-[40%] left-[30%] animate-float"
        style={{ animationDelay: "1.7s" }}
      />
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-white relative overflow-hidden">
      <Header />

      {!showCard && (
        <div
          ref={heroRef}
          className="min-h-screen relative flex flex-col items-center justify-center pt-20 pb-10 px-4 md:px-6 overflow-hidden"
        >
          <div className="absolute inset-0 bg-iftar-light-gold/50 pointer-events-none"></div>
          <FloatingIcons />

          <div className="z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
            <div className="mb-6 md:mb-8 inline-block">
              <span className="px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-iftar-cream border border-iftar-gold/30 text-iftar-navy inline-flex items-center text-xs md:text-sm font-medium">
                <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2 text-iftar-gold" />
                <time dateTime="2023-03-26">March 6, 2026</time>
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-semibold mb-4 md:mb-6 tracking-tight text-iftar-navy">
              Teekops
              <br />
              <span className="gold-shimmer">Ifthar Gathering</span>
            </h1>

            <p className="text-base md:text-lg text-iftar-navy/80 max-w-2xl mx-auto mb-4 md:mb-6">
              A beautiful evening of connection, reflection, and celebration as we broke fast together at the Cheyavoor Office.
            </p>

            <p className="text-base md:text-lg italic text-iftar-gold font-medium mb-6 md:mb-8">
              We not only debugged our hunger, but also strengthened our team bonds!
              <br />
              <span className="text-sm md:text-base">
                An unforgettable evening with amazing colleagues.
              </span>
            </p>

            <div className="flex flex-col items-center gap-4">
            <input
  type="tel"
  placeholder="Enter phone number"
  className="border p-3 rounded w-64 focus:outline-none focus:ring-2 focus:ring-iftar-gold/60 transition"
  value={phone}
  onChange={(e) => {
    // Only allow digits, max 10
    const val = e.target.value.replace(/\D/g, "").slice(0, 10);
    setPhone(val);
  }}
/>
              <button
                onClick={handlePhoneSubmit}
                className="bg-gradient-to-r from-iftar-gold to-yellow-400 text-white px-6 py-2 rounded shadow-lg hover:scale-105 hover:shadow-2xl transition-transform font-semibold text-lg"
              >
                Check Invitation
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Spinner Wheel */}
      {showCard && !showResultModal && (  /* ADDED CONDITION */
        <div className="min-h-screen relative flex flex-col items-center justify-center pt-20 pb-10 px-4 md:px-6 overflow-hidden bg-iftar-light-gold/50">
          <FloatingIcons />

          {invited && result === "Invited" && (
            <Confetti
              width={windowSize.width}
              height={windowSize.height}
              recycle={false}
              numberOfPieces={400}
              gravity={0.3}
              style={{ position: "fixed", top: 0, left: 0, zIndex: 9999 }}
            />
          )}

          <button
            onClick={handleClose}
            className="absolute top-24 right-6 text-gray-600 hover:text-gray-900"
          >
            <X size={28} />
          </button>

          <div className="w-0 h-0 border-l-[18px] border-r-[18px] border-t-[30px] border-l-transparent border-r-transparent border-t-red-500 mt-[-17px] z-10"></div>

          <div
            className="relative w-[340px] h-[340px] rounded-full border-8 border-iftar-gold shadow-2xl"
            style={{
              transform: `rotate(${rotation}deg)`,
              transition: "transform 4s cubic-bezier(0.33,1,0.68,1)",
              background: `
                conic-gradient(
                  #facc15 0deg 90deg,
                  #fde68a 90deg 180deg,
                  #fbbf24 180deg 270deg,
                  #fde68a 270deg 360deg
                )
              `,
            }}
          >
            {wheelOptions.map((text, i) => {
              const angle = i * 90 + 45;

              const isTopStyle =
                text === "Invited" || text === "Surprise Gift";

              return (
                <div
                  key={i}
                  className="absolute w-[120px] text-center font-semibold text-iftar-navy"
                  style={{
                    top: "40%",
                    left: "35%",
                    transform: `
                      rotate(${angle}deg)
                      translateY(${isTopStyle ? "-98px" : "-100px"})
                      rotate(-${angle}deg)
                    `,
                    transformOrigin: "center",
                  }}
                >
                  {text}
                </div>
              );
            })}
          </div>

          <button
            onClick={spinWheel}
            className="mt-8 bg-gradient-to-r from-iftar-gold to-yellow-400 text-white px-6 py-2 rounded shadow-lg hover:scale-105 transition"
          >
            Spin Wheel
          </button>

        </div>
      )}

      {/* ADDED RESULT MODAL */}
      {showResultModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md text-center">

            {(result === "Invited" || result === "Surprise Gift") ?(
              
              <>
                <h2 className="text-2xl font-bold text-iftar-navy mb-4">
                  🎉 {result}
                </h2>

                <p className="mb-4 text-gray-700">
                  Please visit <b>Teekops</b>
                </p>

                <div className="bg-iftar-light-gold text-xl font-bold py-3 rounded mb-4">
                  Code: {giftCode}
                </div>

                <p className="text-sm text-gray-600">
                  “Take this code to Teekops — we have something special for you!”
                </p>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-red-500 mb-4">
                  Sorry
                </h2>

                <p className="text-gray-700">
                  “Good try! We hope to see you at another event soon.”
                </p>
              </>
            )}

            <button
              onClick={() => {
                setShowResultModal(false);
                setShowCard(false);
                setPhone("");
                setResult("");
                window.location.reload();
                
                
                
              }}
              className="mt-6 bg-iftar-gold text-white px-6 py-2 rounded hover:scale-105 transition"
            >
              Close
            </button>

          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Ifthar2026;