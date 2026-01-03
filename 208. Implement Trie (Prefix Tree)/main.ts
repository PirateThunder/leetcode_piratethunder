class Node {
    val: string | null
    next: Node[]
    isWordEnd: boolean

    constructor(val: string | null = null) {
        this.val = val
        this.next = []
        this.isWordEnd = false
    }
}

class Trie {
    data: Node

    constructor() {
        this.data = new Node("$")
    }

    insert(word: string): void {
        let curNode = this.data
        for (const x of word) {
            let isFind = false
            for (const node of curNode.next) {
                if (node.val === x) {
                    isFind = true
                    curNode = node
                }
            }
            if (!isFind) {
                const newNode = new Node(x)
                curNode.next.push(newNode)
                curNode = newNode
            }
        }
        curNode.isWordEnd = true
    }

    search(word: string): boolean {
        let curNode = this.data
        for (const x of word) {
            let isFind = false
            for (const node of curNode.next) {
                if (node.val === x) {
                    isFind = true
                    curNode = node
                }
            }
            if (!isFind) {
                return false
            }
        }
        return curNode.isWordEnd
    }

    startsWith(prefix: string): boolean {
        let curNode = this.data
        for (const x of prefix) {
            let isFind = false
            for (const node of curNode.next) {
                if (node.val === x) {
                    isFind = true
                    curNode = node
                }
            }
            if (!isFind) {
                return false
            }
        }
        return true
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
