package reon.app.domain.member.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;
import reon.app.domain.member.entity.MemberInfo;

@Data
@AllArgsConstructor
@NoArgsConstructor
@SuperBuilder
public class MemberUpdateInfoRequest {
    private String nickName;
    private String introduce;

    public MemberInfo toEntity(){
        return MemberInfo.builder()
                .nickName(this.nickName)
                .introduce(this.introduce)
                .build();
    }
}
