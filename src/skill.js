function SkillCard(props) {
    return (
        <div className="skillcard ">
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