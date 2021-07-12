import ThemeContext from "context/themeContext";

export function Provider(props) {
    return (
        <ThemeContext>
            {props.children}
        </ThemeContext>
    )
}
