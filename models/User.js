module.exports = function(sequelize, Sequelize) {

    var User = sequelize.define('User', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        username: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },

        locationId: {
          type: Sequelize.INTEGER,
          allowNull: false
        },

        phone: {
          type: Sequelize.INTEGER,
          allowNull: false
        },

        last_login: {
            type: Sequelize.DATE,
        },

        onlineNow: {
          type: Sequelize.BOOLEAN,
          defaultValue: false
        },

        activeAcc: {
          type: Sequelize.BOOLEAN,
          defaultValue: false
        },

        passwdReset: {
          type: Sequelize.BOOLEAN,
          defaultValue: false
        }

    });
    User.associate = function (models) {

      User.hasOne(models.UserDetail, {
         as: 'UserDetail',
         foreignKey: 'userId'
       });

      User.hasOne(models.PsycheUserResult, {
         as: 'UserPsycheResult',
         foreignKey: 'userId'
       });

       User.hasOne(models.PsycheUserAnswer, {
          as: 'UserPsycheAnswer',
          foreignKey: 'userId'
      });

      User.hasOne(models.CommunicationMessage, {
         as: 'UserCommunicationMessage1',
         foreignKey: 'userId1'
       });

       User.hasOne(models.CommunicationMessage, {
          as: 'UserCommunicationMessage2',
          foreignKey: 'userId2'
      });

      User.hasOne(models.CommunicationWatchedProfile, {
         as: 'UserCommunicationWatched1',
         foreignKey: 'userId1'
       });

       User.hasOne(models.CommunicationWatchedProfile, {
          as: 'UserCommunicationWatched2',
          foreignKey: 'userId2'
      });

      User.hasOne(models.CommunicationBlackUser, {
         as: 'UserCommunicationBlack1',
         foreignKey: 'userId1'
       });

       User.hasOne(models.CommunicationBlackUser, {
          as: 'UserCommunicationBlack2',
          foreignKey: 'userId2'
      });

      User.hasOne(models.CommunicationFavoriteUser, {
         as: 'UserCommunicationFavorite1',
         foreignKey: 'userId1'
       });

       User.hasOne(models.CommunicationFavoriteUser, {
          as: 'UserCommunicationFavorite2',
          foreignKey: 'userId2'
      });

      User.hasOne(models.CommunicationFiltrUserAnswer, {
         as: 'UserCommunicationFiltrAnswer1',
         foreignKey: 'userId1'
       });

       User.hasOne(models.CommunicationFiltrUserAnswer, {
          as: 'UserCommunicationFiltrAnswer2',
          foreignKey: 'userId2'
      });

      User.hasOne(models.CommunicationGiftToken, {
         as: 'UserCommunicationGiftToken1',
         foreignKey: 'userId1'
       });

       User.hasOne(models.CommunicationGiftToken, {
          as: 'UserCommunicationGiftToken2',
          foreignKey: 'userId2'
      });

      User.hasOne(models.CommunicationGiftToken, {
         as: 'UserCommunicationProvocationToken1',
         foreignKey: 'userId1'
       });

       User.hasOne(models.EventInvite, {
          as: 'UserEventInvite1',
          foreignKey: 'userId1'
      });

      User.hasOne(models.EventInvite, {
         as: 'UserEventInvite2',
         foreignKey: 'userId2'
     });

    User.hasOne(models.EventUser, {
       as: 'UserEventCreatedUser',
       foreignKey: 'createdByUserId'
   });

   User.hasOne(models.EventUserConn, {
      as: 'UserEventUserConn1',
      foreignKey: 'userId1'
  });

  User.hasOne(models.EventUserConn, {
     as: 'UserEventUserConn2',
     foreignKey: 'userId2'
 });

 User.hasOne(models.Notifications, {
    as: 'UserNotifications',
    foreignKey: 'userId'
});

 User.belongsTo(models.Locations, {
    as: 'UserLocation',
    foreignKey: 'locationId'
});





    };

    return User;

};
