import { useAnimate } from "framer-motion";

function SkillCard(props) {
    const [scope, animate] = useAnimate()

    const hover = () => {
        const controls = animate(scope.current, {rotateY: 180})
        controls.time = .8
        return () => controls.stop()
    }

    const leave = () => {
        const controls = animate(scope.current, {rotateY: 0})
        controls.speed = .3
        return () => controls.stop()
    }

    return (
        <div ref={scope} onMouseOver={hover} onMouseLeave={leave} className="skillcard ">
            <div>
                {props.name}
            </div>
            <div>
                <span>{props.tools}</span>
            </div>
        </div>
    );
}

export default SkillCard;