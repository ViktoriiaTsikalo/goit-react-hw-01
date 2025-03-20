import styles from './FriendList.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
    return (
        <li className={styles.friendItem}>
            <img src={avatar} alt="Avatar" className={styles.avatar} />
            <p className={styles.name}>{name}</p>
            <p className={`${styles.status} ${isOnline ? styles.online : styles.offline}`}>
                {isOnline ? 'Online' : 'Offline'}
            </p>
        </li>
    );
}
