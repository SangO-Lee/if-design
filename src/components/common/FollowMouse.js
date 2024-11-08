import { useEffect } from "react";

function FollowMouse({ target, direction = "opposite" }) {
    useEffect(() => {
        const handleMouseMove = (event) => {
            const targetObject = target.current;
            if (targetObject) {
                const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
                const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

                // 방향 설정: 같은 방향("same")일 경우, 또는 반대 방향("opposite")일 경우
                const directionMultiplier = direction === "same" ? -1 : 1;
                const translateX = mouseX * -45 * directionMultiplier;
                const translateY = mouseY * 15 * directionMultiplier;

                targetObject.style.transform = `translateX(${translateX}px) translateY(${translateY}px)`;
            }
        };

        document.addEventListener("mousemove", handleMouseMove);
        return () => document.removeEventListener("mousemove", handleMouseMove);
    }, [target, direction]);

    return null;
}

export default FollowMouse;
