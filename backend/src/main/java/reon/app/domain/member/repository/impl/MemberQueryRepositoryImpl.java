package reon.app.domain.member.repository.impl;

import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import reon.app.domain.member.dto.res.MemberResponse;
import reon.app.domain.member.repository.MemberQueryRepository;

import static reon.app.domain.member.entity.QMember.member;

@Repository
@RequiredArgsConstructor
public class MemberQueryRepositoryImpl implements MemberQueryRepository {
    private final JPAQueryFactory queryFactory;
    //mypage 조회
    @Override
    public MemberResponse findById(Long id) {
        return queryFactory
                .select(Projections.fields(MemberResponse.class,
                        member.id,
                        member.memberInfo.nickName,
                        member.memberInfo.introduce,
                        member.memberInfo.profileImg,
                        member.email,
                        member.memberBattleInfo.tier
                ))
                .from(member)
                .where(member.id.eq(id))
                .fetchOne();
    }
}
