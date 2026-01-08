/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    int acc = 0;

    void step(ListNode *l1, ListNode* l2, ListNode* l3) {
        int s = l1->val + l2->val + acc;
        l3->val = s%10;
        acc = s/10;

        cout << l1->val << "+" << l2->val << "=" << l3->val << "\n";

        // if      (l1->next == nullptr && l2->next == nullptr) return;
        if (l1->next == nullptr && l2->next != nullptr) {
            cout << "l1->next = new ListNode();\n";
            l1->next = new ListNode();
        }
        else if (l1->next != nullptr && l2->next == nullptr) {
            cout << "l2->next = new ListNode();\n";
            l2->next = new ListNode();
        }
        
        if (l1->next != nullptr && l2->next != nullptr) {
            // if (l1->next == nullptr && l2->next != nullptr) l1->next = new ListNode();
            // else if (l1->next != nullptr && l2->next == nullptr) l2->next = new ListNode();

            cout << "l3->next = new ListNode();\n";
            l3->next = new ListNode();
            step(l1->next, l2->next, l3->next);
        }

        if (acc == 1) {
            l3->next = new ListNode(1);
            acc = 0;
        }
    }

    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode* l3 = new ListNode();
        if (l1 == nullptr) return nullptr;
        step(l1, l2, l3);
        return l3;
    }
};
