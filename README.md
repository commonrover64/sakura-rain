# Sakura fall

LightWeight sakura rain / fall animation as a Web Component.

## Install
npm install sakura-fall

## Usage
import "sakura-fall";

<sakura-fall></sakura-fall> <!-- Default is 🌸 -->  
<sakura-fall emoji="add your custom emoji here"></sakura-fall>


## Example (React / Mern)
import "sakura-fall";

function App() {

    return (
        <>
            <sakura-fall sakura="❄️"/>
            <h1>Hello World</h1>
        </>
    )
}