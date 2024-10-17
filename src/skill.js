function SkillCard(props) {
    return (
        <div>
            <div>
                {props.name}
            </div>
            <div>
                {props.tools}
            </div>
        </div>
    );
}

export default SkillCard;