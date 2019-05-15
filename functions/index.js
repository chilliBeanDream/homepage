const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

exports.cullOldTodos = functions.database.ref('todos/{todoId}')
.onWrite((change, context) => {
    const ref = change.after.ref.parent;
    const currentTime = Date.now();
    const cutoffTime = currentTime - 2 * 24 * 60 * 60 * 1000;
    const oldItemsQuery = ref.orderByChild('timeChanged').endAt(cutoffTime);
    return oldItemsQuery.once('value', (snapshot) => {
        const updates = {};
        let count = 0;
        snapshot.forEach((child) => {
            if (child.val().done) {
                updates[child.key] = null;
                count++;
            }
        });
        console.log(`Removing ${count} old todos`);
        return ref.update(updates);
    });
});