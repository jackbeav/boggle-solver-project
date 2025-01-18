class Node {
    constructor(letter){
        this.l = letter
        this.e = false
        this.c = []
    }

    add(letter) {
        this.c.push(new Node(letter))
    }

    setEndpoint() {
        this.e = true
    }

    getChild(letter) {
        for(let i = 0; i < this.c.length; i++){
            if(this.c[i].l == letter){
                return this.c[i]
            }
        }
        return null;
    }
}


const fs = require('fs');
const readline = require('readline');

const root = new Node("", false)

const fileStream = fs.createReadStream('dictionary.txt')
const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity // Recognize all instances of CR LF as a single newline
});

rl.on('line', (line)=>{addToTree(line.trim())})
rl.on('close', () => {
    const treeString = JSON.stringify(root, null, 2)
    fs.writeFile('boggleTrie.json', treeString, (err) => {
        if (err) {
        console.error('Error writing to file:', err);
        } else {
        console.log('JSON file written successfully!');
        }
    })
})


function addToTree(word) {
    if(word.length < 3){
        return //only 3 length or longer words are valid in boggle
    }
    let currentNode = root
    for(let i = 0; i < word.length; i++){
        const childExists = Boolean(currentNode.getChild(word[i]))
        if(!childExists){
            currentNode.add(word[i])
        }
        currentNode = currentNode.getChild(word[i])
        if(i == word.length - 1){
            currentNode.setEndpoint()
        }
    }
}