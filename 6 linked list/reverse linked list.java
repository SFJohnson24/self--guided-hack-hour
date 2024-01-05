package 6 linked list;

public class reverse linked list {
    public ListNode reverseList(ListNode head) {
        ListNode prev = null;  
        ListNode current = head;
    
        
        while(current != null) { 
            ListNode next = current.next; 
            current.next = prev;
            prev = current;
            current = next;
        }
       return prev; 
    }
}
