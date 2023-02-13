//ButtonStyled.tsx
const StyledButton=styled.button<{variant:string}>`
    display: flex;
    padding: 7px 10px;
    outline: none;
//accepting props from app.jsx to styles
    background: ${({variant})=>variant=="outlined"? "none":"red"};
    border:2px solid red;
    color:blue;
    cursor: pointer;
    margin:2px;
    &:hover{
        background: green;
        color: aliceblue;
    }
`

export default StyledButton;


//Button.tsx
type Post={
    id:string;
}

type ButtonProps={
    btnText: string|number;
    isPublished?:boolean;
    post?:Post;
    delete?:(id:string)=>void;
    handleDate:()=>void;
    variant:string;
}

const Button: React.FC<ButtonProps>=({btnText,handleDate})=>{
    return <StyledButton onClick={handleDate}  variant={variant}   >
        {btnText}
    </StyledButton>
}
export default Button;


//APP.TSX
function App(params:type) {
    const [date,setDate]=useState("")
    const handleDate=(){
        const currentDate=new Date();
        setDate(currentDate.toDateString())
    }
    return(
        <>
            <Button btnText={89} isPublished={true} post={{id:"adsa"}}
            handleDate={()=>handleDate()}   
            />>
        </>)
}