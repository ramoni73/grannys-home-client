import React from "react";
import ProfileForm from "../profileForm/ProfileForm";
import CardList from "../cardList/CardList";

const ProfilePage = () => {
    const cards = [
        {
            id: 1,
            header: "First Header",
            title: "This is first title",
            text: "The first text of the first card"
        },
        {
            id:2,
            header: "Вторая карточка",
            title: "Это тип вторая карточка",
            text: "А вот это вот текст на второй карточке. Вот такой вот он, текст этот."
        },
        {
            id:3,
            header: "Нана",
            title: "Собака",
            text: "Это тип вообще в будущем карточки с животными будут. Еще бы фотку сюда прикрутить... А пока потестим длинный текст, который по идее вот уже не должен умещаться у меня на страничке, так как монитор не сильно широкий. Но вроде он сам переносится, так что все ок по идее должно быть."
        }
    ]

    return (
        <>
            <ProfileForm />
            <CardList data={cards} />
        </>
    )
};

export default ProfilePage